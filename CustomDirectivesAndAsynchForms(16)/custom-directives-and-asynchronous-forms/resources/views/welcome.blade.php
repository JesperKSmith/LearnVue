<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laravel</title>

        
    </head>
    <body>
        <div class="container">

            <form method="POST" 
                  action="/posts/4" 
                  v-ajax complete="Post was deleted!"
            >
                {{ method_field('DELETE') }}
                {{ csrf_field() }}

                <button type="submit">Delete Post</button>

            </form>
            
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.15/vue.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.6.1/vue-resource.min.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>
