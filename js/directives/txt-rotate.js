app.directive('txtRotate', function($timeout){
    return {

        link: function(scope, element, attrs){

            var TxtRotate = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };

            TxtRotate.prototype.tick = function() {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];

                if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }
                scope.tags = this.txt;

                var that = this;
                var delta = 300 - Math.random() * 100;

                if (this.isDeleting) { delta /= 2; }

                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }

                $timeout(function() {
                    that.tick();
                }, delta);
            };

            var toRotate = attrs.rotate;
            var period = attrs.period;
            if (toRotate) {
                new TxtRotate(element, JSON.parse(toRotate), period);
            }
        },
        template: '<span class="wrap">{{ tags }}</span>'
    }
});