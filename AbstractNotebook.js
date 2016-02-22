var AbstractNotebook = (function(){

    function AbstractNotebook(){
        if(this.constructor == AbstractNotebook){
            throw new Error('This is abstract class');
        }

        this.pages = [];

    }

    AbstractNotebook.prototype.searchWord   = function(word){

        this.pages.forEach(function(e){

            if(e.searchWord(word)){
                console.log(word);
                console.log('there is word on page: ' + e.number);
            }
        })

    };

    AbstractNotebook.prototype.printAllPagesWithDigits = function(){
        var _this = this;

        this.pages.forEach(function(e){
            if(e.containDigits()){

                _this.viewPage(e.number);
            }
        })

    };

    AbstractNotebook.prototype.addTitleToCurrentPage   = function(){
        throw new Error('its not implemented')
    };

    AbstractNotebook.prototype.addTextToCurrentPage    = function(){
        throw new Error('its not implemented')
    };

    AbstractNotebook.prototype.removeText       = function(){
        throw new Error('its not implemented')
    };

    AbstractNotebook.prototype.removeAndAddText = function(){
        throw new Error('its not implemented')
    };

    AbstractNotebook.prototype.viewPage         = function(number){
        throw new Error('its not implemented')
    };

    AbstractNotebook.prototype.viewAllPages     = function(){
        throw new Error('its not implemented');
    };

    AbstractNotebook.prototype.removePage       = function(index){
        this.pages.splice(index, 1);
    };

    return AbstractNotebook;

}());

