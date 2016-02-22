function Factory(){

    return {
        create : function(){

            if(arguments.length > 0){
                return SecuredЕlectronicNotepad.getInstance(arguments[0])
            }else{
                return SimpleNotepad.getInstance()
            }
        }
    }
}