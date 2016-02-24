function foo( int, callback ) {
    if ( int > 3 ) {
        callback( int );
    }
}
​
function bar( int ) {
    console.log( 'Int: ' + int );
}
​
foo( 4, function( int ) {
    console.log( 'Anon:' + int );
} );

