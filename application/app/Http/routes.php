
<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {

    echo 'Welcome to my site';
});
Route::get('hello', function () {

    echo 'Hello There';
});
//create an item
Route::post('test', function(){
    echo 'posted';
});
//read an item
Route::get('test', function(){
    echo '<form action="test" method="POST">';
    echo '<input type="submit" value="submit">';
    echo '<input type="hidden" name="_token" value="'.csrf_token().'">';
    echo '<input type="hidden" name="_method" value="PUT">';
    echo '</form>';
});
//update an item
Route::put('test', function(){
    echo 'put';
});
//delete an item
Route::delete('test', function(){
    echo 'delete';
});
Route::get('test123',function(){
    echo 'Deleted';
});
Route::get('test123','TestController@index');
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
