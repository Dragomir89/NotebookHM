var SimpleNotepad = (function(parent){

    function SimpleNotebook(){

        parent.call(this);

    }

    SimpleNotebook.prototype  = Object.create(parent.prototype);
    SimpleNotebook.prototype.constructor = SimpleNotebook;

    SimpleNotebook.prototype.addPage = function(title, text){
        var page = new Page();

        page.addTitle(title);
        page.addText(text);
        this.pages.push(page);
    };

    SimpleNotebook.prototype.addTitleToCurrentPage = function(title, numPage){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }

        var page = this.pages[numPage];
        page.addTitle(title);

    };

    SimpleNotebook.prototype.addTextToCurrentPage = function(text, numPage){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }

        var page = this.pages[numPage];
        page.addText(text);
    };

    SimpleNotebook.prototype.removeText  = function(numPage){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }

        var page = this.pages[numPage];
        page.removeText()
    };

    SimpleNotebook.prototype.removeAndAddText = function(text, numPage){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }
        var page = this.pages[numPage];

        this.removeText(numPage);
        this.addTextToCurrentPage(text,numPage);

    };

    SimpleNotebook.prototype.viewPage  = function(numPage){
        if(!this.pages[numPage]){
            console.log(numPage);
            console.log('Invalid Page');
            return;
        }
        var page = this.pages[numPage];

        console.log('title: ' + page.title);
        console.log(page.text);

        return  + '\n' + page.text;
    };

    SimpleNotebook.prototype.viewAllPages = function(){
        var result = '';

        this.pages.forEach(function(e){
            result += e.title;
            result += '\n';
            result += e.text;
            result += '\n';
        });

        console.log(result);

    };



    var instance;
    return{
        getInstance : function(){
            if(!instance){
                instance = new SimpleNotebook();
            }
            return instance
        }
    }
}(AbstractNotebook));



