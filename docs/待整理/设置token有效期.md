# 设置token有效期
#### oAuth2.0中access\_token默认有效时长为12个小时，refresh\_token默认时长为30天。在实际运用中需要根据需求设置有效时长。
在AuthorizationServerConfigurerAdapter,重写一个TokenServices,

```Plain Text
@Override  
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {

        // 设置令牌        
        endpoints.tokenStore(tokenStore()).userDetailsService(userDetailsService1());  
        // 最后一个参数为替换之后授权页面的url
        endpoints.pathMapping("/oauth/confirm_access","/custom/confirm_access");
        //endpoints.tokenServices(defaultTokenServices());
        DefaultTokenServices tokenServices = new DefaultTokenServices();
        tokenServices.setTokenStore(endpoints.getTokenStore());
        tokenServices.setSupportRefreshToken(true);  
        tokenServices.setClientDetailsService(endpoints.getClientDetailsService());
        tokenServices.setTokenEnhancer(endpoints.getTokenEnhancer());
        tokenServices.setAccessTokenValiditySeconds(60*60*2);//token有效期设置2个小时
        tokenServices.setRefreshTokenValiditySeconds(60*60*12);//Refresh_token:12个小时
        endpoints.tokenServices(tokenServices);            
    }
```
#### Spring cloud oauth2.0 access\_token 永不失效设置方法
在AuthorizationServerConfigurerAdapter,重写一个TokenServices,注意这里的[@Primary](https://github.com/Primary) 非常重要,否则会有3个同类型的Bean,无法注入,会抛出以下异常

```Plain Text
org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type 'org.springframework.security.oauth2.provider.token.ResourceServerTokenServices' available: expected single matching bean but found 3: consumerTokenServices,defaultAuthorizationServerTokenServices,tokenServices
```
```Plain Text
Method springSecurityFilterChain in org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration required a single bean, but 3 were found:
```
配置如下

```Plain Text
@Primary
    @Bean
    public AuthorizationServerTokenServices tokenServices() {
        DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
        defaultTokenServices.setAccessTokenValiditySeconds(-1);
        defaultTokenServices.setRefreshTokenValiditySeconds(-1);
        defaultTokenServices.setSupportRefreshToken(true);
        defaultTokenServices.setReuseRefreshToken(false);
        defaultTokenServices.setTokenStore(tokenStore());
        return defaultTokenServices;
    }
```
在这里设置进去

```Plain Text
@Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.tokenServices(tokenServices());
    }
```
