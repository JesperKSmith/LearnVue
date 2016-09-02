<!DOCTYPE html>
<html lang="en">
    <head>
        
        <title>Laravel</title>

    </head>
    <body>
        <div class="container">
            @if (session()->has('status'))       
                <alert type="success" timeout=1000>{{ session('status') }}</alert>
            @endif
                <div class="content">
                    <div class="title">Lesson 21</div>


                </div>
        </div>
        <script src="/js/main.js"></script>
    </body>
</html>
