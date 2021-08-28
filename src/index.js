module.exports = function check(str, bracketsConfig) {
 let Array = [];

    for( let i = 0; i < str.length; i++ ){
        for ( let bracket of bracketsConfig ) {
            if( str[i] == bracket[0]  && bracket[0] == bracket[1]
                && bracket[0] == Array[Array.length - 1] ){
                Array.pop();
                break;
            }
            if ( str[i] == bracket[0] ){
                Array.push( str[i] );
                break;
            }
            if( str[i] == bracket[1] ){
                if( bracket[0] != Array.pop() ){
                    return false;
                }
            }
        }
    }
    if( Array.length ) return false;
    return true;
}
