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
      return this.frequency_of(this.time);
    };
    SoundCalc.prototype.frequency_of = function(time) {
      return 1.0 / time;
    };
    SoundCalc.prototype.time_of = function(freq) {
      return 1.0 / freq;
    };
    SoundCalc.prototype.format_freq = function(freq) {
      return "<span class='freq'>" + (freq.toFixed(2)) + " Hz</span>";
    };
    SoundCalc.prototype.format_time = function(time) {
      return "<span class='time'>" + ((time * 1000.0).toFixed(4)) + " ms</span>";
    };
    SoundCalc.prototype.harmonics = function() {
      var divider, fraction, frequency, h_freq, h_time, multiplier, new_freq, result;
      frequency = this.getFrequency();
      result = (function() {
        var _results;
        _results = [];
        for (multiplier = 1; multiplier <= 8; multiplier++) {
          _results.push(((function() {
            var _results2;
            _results2 = [];
            for (divider = 1; divider <= 8; divider++) {
              new_freq = frequency * multiplier / divider;
              h_freq = this.format_freq(new_freq);
              h_time = this.format_time(this.time_of(new_freq));
              fraction = "<span class='fraction'>" + multiplier + " / " + divider + ":</span>";
              _results2.push("<div class='harm_row'>" + fraction + " " + h_freq + " " + h_time + "</div>");
            }
            return _results2;
          }).call(this)).join("\n"));
        }
        return _results;
      }).call(this);
      return result.join("\n");
    };
    SoundCalc.prototype.update = function() {
      $('#time').val(this.time);
      $('#frequency').val(this.getFrequency());
      return $('#harmonics').html(this.harmonics());
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
