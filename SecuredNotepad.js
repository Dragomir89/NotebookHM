var SecuredЕlectronicNotepad = (function(parent){

    function SecuredЕlectronicNotepad(pass){
        parent.call(this);

        this.pass = pass;
    };


    SecuredЕlectronicNotepad.prototype  = Object.create(parent.prototype);
    SecuredЕlectronicNotepad.prototype.constructor = SecuredЕlectronicNotepad;



    SecuredЕlectronicNotepad.prototype.addPage   = function(title, text, pass){
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }
        if(!this.isStarted){
            throw new Error('Electronic Notepad is stopped')
        }

        var page = new Page();

        page.addTitle(title);
        page.addText(text);
        page.number = this.pages.length;
        this.pages.push(page);
    };

    SecuredЕlectronicNotepad.prototype.addTitleToCurrentPage = function(title, numPage, pass){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }
        if(!this.isStarted){
            throw new Error('Electronic Notepad is stopped')
        }

        var page = this.pages[numPage];
        page.addTitle(title);

    };

    SecuredЕlectronicNotepad.prototype.addTextToCurrentPage  = function(text, numPage, pass){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }
        if(!this.isStarted){
            throw new Error('Electronic Notepad is stopped')
        }


        var page = this.pages[numPage];
        page.addText(text);
    };

    SecuredЕlectronicNotepad.prototype.removeText  = function(numPage, pass){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }
        if(!this.isStarted){
            throw new Error('Electronic Notepad is stopped')
        }

        var page = this.pages[numPage];
        page.removeText()
    };

    SecuredЕlectronicNotepad.prototype.removeAndAddText = function(text, numPage, pass){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }
        if(!this.isStarted){
            throw new Error('Electronic Notepad is stopped')
        }

        var page = this.pages[numPage];

        this.removeText(numPage);
        this.addTextToCurrentPage(text,numPage);

    };

    SecuredЕlectronicNotepad.prototype.viewPage   = function(numPage, pass){
        if(!this.pages[numPage]){
            console.log('Invalid Page');
            return;
        }
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }
        if(!this.isStarted){
            throw new Error('Electronic Notepad is stopped')
        }


        var page = this.pages[numPage];

        return page.title + '\n' + page.text;
    };

    SecuredЕlectronicNotepad.prototype.viewAllPages = function(pass){
        var result = '';
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }
        if(!this.isStarted){
            throw new Error('Electronic Notepad is stopped')
        }

        this.pages.forEach(function(e){
            result += e.title;
            result += '\n';
            result += e.text;
            result += '\n';
        });

        console.log(result);

    };

    SecuredЕlectronicNotepad.prototype.searchWord = function(word, pass){
        if(pass != this.pass){
            console.log('invalid pass');
            return
        }
        if(pass == undefined){
            throw new Error('invalid notepad there is not pass !');
        }

        AbstractNotebook.prototype.searchWord.call(this,word);

    };





    var instance;

    return{
        getInstance : function(pass){
            if(!instance){
                instance = new SecuredЕlectronicNotepad(pass);
            }
            return instance
        }
    }



}(AbstractЕlectronicDevice));


//function SecuredЕlectronicNotepad(pass){
//    AbstractЕlectronicDevice.call(this);
//
//    this.pass = pass;
//};
//
//
//SecuredЕlectronicNotepad.prototype  = Object.create(AbstractЕlectronicDevice.prototype);
//SecuredЕlectronicNotepad.prototype.constructor = SecuredЕlectronicNotepad;
//
//
//
//SecuredЕlectronicNotepad.prototype.addPage   = function(title, text, pass){
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//    if(!this.isStarted){
//        throw new Error('Electronic Notepad is stopped')
//    }
//
//    var page = new Page();
//
//    page.addTitle(title);
//    page.addText(text);
//    page.number = this.pages.length;
//    this.pages.push(page);
//};
//
//SecuredЕlectronicNotepad.prototype.addTitleToCurrentPage = function(title, numPage, pass){
//    if(!this.pages[numPage]){
//        console.log('Invalid Page');
//        return;
//    }
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//    if(!this.isStarted){
//        throw new Error('Electronic Notepad is stopped')
//    }
//
//    var page = this.pages[numPage];
//    page.addTitle(title);
//
//};
//
//SecuredЕlectronicNotepad.prototype.addTextToCurrentPage  = function(text, numPage, pass){
//    if(!this.pages[numPage]){
//        console.log('Invalid Page');
//        return;
//    }
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//    if(!this.isStarted){
//        throw new Error('Electronic Notepad is stopped')
//    }
//
//
//    var page = this.pages[numPage];
//    page.addText(text);
//};
//
//SecuredЕlectronicNotepad.prototype.removeText  = function(numPage, pass){
//    if(!this.pages[numPage]){
//        console.log('Invalid Page');
//        return;
//    }
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//    if(!this.isStarted){
//        throw new Error('Electronic Notepad is stopped')
//    }
//
//    var page = this.pages[numPage];
//    page.removeText()
//};
//
//SecuredЕlectronicNotepad.prototype.removeAndAddText = function(text, numPage, pass){
//    if(!this.pages[numPage]){
//        console.log('Invalid Page');
//        return;
//    }
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//    if(!this.isStarted){
//        throw new Error('Electronic Notepad is stopped')
//    }
//
//    var page = this.pages[numPage];
//
//    this.removeText(numPage);
//    this.addTextToCurrentPage(text,numPage);
//
//};
//
//SecuredЕlectronicNotepad.prototype.viewPage   = function(numPage, pass){
//    if(!this.pages[numPage]){
//        console.log('Invalid Page');
//        return;
//    }
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//    if(!this.isStarted){
//        throw new Error('Electronic Notepad is stopped')
//    }
//
//
//    var page = this.pages[numPage];
//
//    return page.title + '\n' + page.text;
//};
//
//SecuredЕlectronicNotepad.prototype.viewAllPages = function(pass){
//    var result = '';
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//    if(!this.isStarted){
//        throw new Error('Electronic Notepad is stopped')
//    }
//
//    this.pages.forEach(function(e){
//        result += e.title;
//        result += '\n';
//        result += e.text;
//        result += '\n';
//    });
//
//    console.log(result);
//
//};
//
//SecuredЕlectronicNotepad.prototype.searchWord = function(word, pass){
//    if(pass != this.pass){
//        console.log('invalid pass');
//        return
//    }
//    if(pass == undefined){
//        throw new Error('invalid notepad there is not pass !');
//    }
//
//    AbstractNotebook.prototype.searchWord.call(this,word);
//
//};
//
//
