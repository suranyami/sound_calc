(function() {
  var SoundCalc;
  SoundCalc = (function() {
    var FREQ_A, TIME_A;
    FREQ_A = 440.0;
    TIME_A = 1.0 / FREQ_A;
    function SoundCalc(time) {
      this.time = time != null ? time : TIME_A;
    }
    SoundCalc.prototype.frequency = function(amount) {
      return this.time = 1.0 / amount;
    };
    SoundCalc.prototype.getFrequency = function() {
      return 1.0 / this.time;
    };
    SoundCalc.prototype.update = function() {
      $('#time').val(this.time);
      return $('#frequency').val(this.getFrequency());
    };
    return SoundCalc;
  })();
  $(document).ready(function() {
    var sound_calc;
    sound_calc = new SoundCalc;
    sound_calc.update();
    $('#time').change(function() {
      sound_calc.time = $(this).val();
      return sound_calc.update();
    });
    return $('#frequency').change(function() {
      var freq;
      freq = $(this).val();
      sound_calc.frequency(freq);
      return sound_calc.update();
    });
  });
}).call(this);
