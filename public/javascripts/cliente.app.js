angular.module('PosApp', [
    'ngRoute','ngResource', 'ngCookies','ngAnimate', 'ui.bootstrap', 'simplePagination'
  ]).run(function($rootScope, $location, $cookies){
	  $rootScope.$on('$routeChangeStart', function(event, next, current){
		  if($cookies.get('estaConectado')==false||$cookies.get('estaConectado')==null){
				  $location.path('/');
			  
		  }else{
			  var usuario=$cookies.getObject('usuario');
			  //muestra la barra de navegación
			    $rootScope.navVisible=true;
									if(usuario[0].rol!=0){
										$rootScope.visible=false;
									}else{
										$rootScope.visible=true;
									} 
			  if(next.templateUrl!='views/login.html' && usuario[0].rol!=0){
				  $location.path('/inicio');
			  }
		  }
			//esconde la barra de navegación
		   if(next.templateUrl=='views/login.html'){
			   $rootScope.navVisible=false;
		   }
		  
		  
		  
	  })
  })
  .config(function ($routeProvider) {
    $routeProvider
	  .when('/', {
        templateUrl: 'views/login.html',
        controller: 'UsuarioCtrl'
      })
	  .when('/inicio', {
        templateUrl: 'views/inicio.html',
		 controller: 'ListarVentaCtrl'
      })
	.when('/listarUsuario', {
        templateUrl: 'views/listarUsuario.html',
        controller: 'ListarUsuarioCtrl'
      })
	.when('/agregarUsuario', {
        templateUrl: 'views/agregarUsuario.html',
        controller: 'AgregarUsuarioCtrl'
      })
	.when('/editarUsuario', {
        templateUrl: 'views/agregarUsuario.html',
        controller: 'EditarUsuarioCtrl'
      })
	.when('/listarProducto', {
        templateUrl: 'views/listarProducto.html',
        controller: 'ListarProductoCtrl'
      })
	.when('/agregarProducto', {
        templateUrl: 'views/agregarProducto.html',
        controller: 'AgregarProductoCtrl'
      })
	.when('/editarProducto', {
        templateUrl: 'views/agregarProducto.html',
        controller: 'EditarProductoCtrl'
      })
	.when('/listarVenta', {
        templateUrl: 'views/listarVenta.html',
        controller: 'ListarVentaCtrl'
      })
	.when('/agregarVenta', {
        templateUrl: 'views/agregarVenta.html',
        controller: 'AgregarVentaCtrl'
      })
	.when('/editarVenta', {
        templateUrl: 'views/agregarVenta.html',
        controller: 'EditarVentaCtrl'
      })
	.when('/totalVenta', {
        templateUrl: 'views/totalVenta.html',
        controller: 'TotalVentaCtrl'
      })	  
      .otherwise({
        redirectTo: '/'
      });
  });