class SoundCalc
  FREQ_A = 440.0
  TIME_A = 1.0 / FREQ_A
  
  constructor: (@time = TIME_A) ->
  
  frequency: (amount) ->
    @time = 1.0 / amount

  getFrequency: ->
    1.0 / @time
    
  update: ->
    $('#time').val(@time)
    $('#frequency').val(@getFrequency())

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
