var Page = (function(){
    function Page(){
        this.title = '';
        this.text = '';
    }

    Page.prototype.addText    = function(text){
        this.text += text;
    };

    Page.prototype.addTitle   = function(title){
        this.title = title;
    };

    Page.prototype.removeText = function(){
        this.text = '';
    };

    Page.prototype.viewPage   = function(){
        var result = this.title;
        result += '\n';
        result += this.text;

        return result;

    };

    Page.prototype.searchWord = function(word){
        var patt = new RegExp(word);
        var result = this.text.match(patt);

        result = Boolean(result);

        return result;
    };

    Page.prototype.containDigits = function(){

        var result = this.text.match(/\d+/g);
        result = Boolean(result);
        return result;
    };


    return Page;
})();

