# jenkins JOB服务脚本
```Plain Text
import hudson.model.*
    //源view
    def str_view = "2手心美业测试环境"
    //目标view
    def str_new_view = "7美业生产-node-1"
    //源job名称(模糊匹配)
    def str_search = "test-"
    //目标job名称(模糊匹配后替换)
    def str_replace = "node1"
    def view = Hudson.instance.getView(str_view)
    //copy all projects of a view
    for(item in view.getItems())
    {
      //create the new project name
      newName = item.getName().replace(str_search, str_replace)
      // copy the job, disable and save it
      def job
      try {
          //因为第一次导入后报错，所以添加了try-catch 跳过已存在的job
          job = Hudson.instance.copy(item, newName)
      } catch(IllegalArgumentException e) {
         println(e.toString())
         println("$newName job is exists")
         continue
      } catch(Exception e) {
        println(e.toString())
        continue
      }
      job.disabled = true
      job.save() 
      // update the workspace to avoid having two projects point to the same location
      AbstractProject project = job
      def new_workspace = project.getCustomWorkspace().replace(str_search, str_replace)
      project.setCustomWorkspace(new_workspace)
      project.save()
      //add job to view
      Hudson.instance.getView(str_new_view).add(job)
      println(" $item.name copied as $newName")
    }

```
