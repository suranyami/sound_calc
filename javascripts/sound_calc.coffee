class SoundCalc
  FREQ_A = 440.0
  TIME_A = 1.0 / FREQ_A
  
  constructor: (@time = TIME_A) ->
  
  frequency: (amount) -> (@time = 1.0 / amount)
  getFrequency: -> (@frequency_of @time)  
  frequency_of: (time) -> (1.0 / time)
  time_of: (freq) -> (1.0 / freq)
  format_freq: (freq) -> "<span class='freq'>#{freq.toFixed(2)} Hz</span>"
  format_time: (time) -> "<span class='time'>#{(time * 1000.0).toFixed(4) } ms</span>"
  
  harmonics: ->
    frequency = @getFrequency()
    result = for multiplier in [1..8]
      (for divider in [1..8]
        new_freq = frequency * multiplier / divider
        h_freq = @format_freq(new_freq)
        h_time = @format_time(@time_of(new_freq))
        fraction = "<span class='fraction'>#{multiplier} / #{divider}:</span>"
        "<div class='harm_row'>#{fraction} #{h_freq} #{h_time}</div>").join("\n")
    result.join("\n")
  
  update: ->
    $('#time').val(@time)
    $('#frequency').val(@getFrequency())
    $('#harmonics').html(@harmonics())

$(document).ready ->
  sound_calc = new SoundCalc
  sound_calc.update()
  
  $('#time').change(->
    sound_calc.time = $(this).val()
    sound_calc.update()
  )

  $('#frequency').change(->
    freq = $(this).val()
    sound_calc.frequency(freq)
    sound_calc.update()
  )
