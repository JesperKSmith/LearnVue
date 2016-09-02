<!DOCTYPE html>

<html>

<head>
	<title>Lesson 20</title>
</head>

<body>
	
	<component is="{{ $vueView }}">
		@yield('content')
	</component>
	
	<script src="/js/main.js"></script>
</body>