var AbstractЕlectronicDevice = (function(parent){

    function AbstractЕlectronicDevice(){
        if(this.constructor == AbstractЕlectronicDevice){
            throw new Error('This is abstract class');
        }

        parent.call(this);

        this.isStarted = false;
    }

    AbstractЕlectronicDevice.prototype  = Object.create(parent.prototype);
    AbstractЕlectronicDevice.prototype.constructor = AbstractЕlectronicDevice;


    AbstractЕlectronicDevice.prototype.start = function(){
        this.isStarted = true;
    };

    AbstractЕlectronicDevice.prototype.stop  = function(){
        this.isStarted = false;
    };





    return AbstractЕlectronicDevice;
}(AbstractNotebook));


