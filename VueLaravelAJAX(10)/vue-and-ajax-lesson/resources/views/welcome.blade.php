<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <title>Laravel</title>
    </head>
    <body>
        <div class="container">

        <!-- Template usage -->
        <tasks></tasks>

        </div>

        <!-- Template -->
        

        <template id="tasks-template">
            <h1> My Tasks </h1>
            <ul class="list-group">
            
                <li class="list-group-item" v-for="task in list">

                        @{{ task.body }}

                        <strong @click="deleteTask(task)">X</strong> 

                </li>
            </ul>

        </template>        
        <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.9.3/vue-resource.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>

