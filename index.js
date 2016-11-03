var katzDeli = []

function takeANumber(line, name){
  line.push(name)
  var pos = line.length
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(line){
  if(line[0]){
  var person = line[0]
  line.shift()
  return `Currently serving ${person}.`
  } else{
  return "There is nobody waiting to be served!"
}
}

function currentLine(line){
  var string = "The line is currently: "
  if(line.length === 0){
    return "The line is currently empty."
  } else{
    for (var cv = 0; cv < line.length; cv++){
      var person = `${cv + 1}. ${line[cv]}`
      string += person
      if(cv < line.length - 1){
        string += ", "
      }
    }
}
return string
}
