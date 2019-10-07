const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Bitna',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Maxee Planck',
    'Katherine Blodgett',
    'Adaee Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
//Milestone 7 🛣🏃Find / FindIndex
//Bonus: Return a new array without inventor with a middle name.

let findNewArrayNoNameWithMiddle = inventors.find(findName)

function findName(name)
{
    let findNoMiddle = name.split(' ')
    return findNoMiddle.length > 2

}
console.log(findNewArrayNoNameWithMiddle)

let notMiddleName = inventors.filter(name =>
        name!==findNewArrayNoNameWithMiddle
    )
console.log(notMiddleName)
  //Find the inventor that has a middle name.

  let findMiddleName = inventors.find(name => name.split(' ').length>=3)
//   let findMiddleName = inventors.find(middleName)

//   function middleName(name)
//   {
//     let splitName = name.split(' ')
//     if(splitName.length >= 3)
//     {
//         return name
//     }
//   }

  console.log(findMiddleName)

//Milestone 6 🛣🏃Some / Every
  //Does every inventor have first name that's longer than 4 characters?
let everyNameGreater4char = inventors.every(checkchar)

function checkchar(char)
{
    let splitName = char.split(' ')[0]
    if(splitName.length>4)
    {
        return splitName
    }
}

console.log(everyNameGreater4char)



//Does every inventor have the letter 'e' in their name?

let everyWithLetterE = inventors.every(letterE=>letterE.includes('e'))

console.log(everyWithLetterE)






  //Does any inventor have the letter 'y' in their name?

  let useSomeToCheckLetterY = inventors.some(checkY)

  function checkY(check)
  {
      return check.includes('y')
  }
console.log(useSomeToCheckLetterY)

//Milestone 5 🛣🏃Reduce
  //Create a string that has the first name of every inventor.
  let reduceEachFirstNameOfEachInventor = inventors.reduce(listStringInventor,'')


function listStringInventor(author,idx)
{
    let word = idx.split(' ')[0]
    return author +" " + word
}

console.log(reduceEachFirstNameOfEachInventor)


//Find the sum of all the even numbers.

let SumEven = numbers.reduce(sumEven,0)

function sumEven(Total,num)
{
    console.log(Total)
    if(num%2==0)
    {
    return Total + num
    }
    else{
        return Total
    }
}

console.log(SumEven)






//Find the sum of all the numbers.

let findSum = numbers.reduce(sum,0)

function sum(Total,num)
{
    return Total + num
}
console.log(findSum)









//Milestone 4 🛣🏃Sort

  //Sort all the inventors by length of name, shortest name first.

  let sortShortestName = inventors.sort((a,b)=>a.length-b.length)
  console.log(sortShortestName)

// Sort all the inventors by length of name, longest name first. Do not use the reverse method.

let sortLongest = inventors.sort((a,b)=>b.length-a.length)
console.log(sortLongest)




// sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.

let sortWithoutReverse = inventors.sort(name =>-1)
console.log(sortWithoutReverse)

//Sort all the inventors in alphabetical order, A-Z.

let sortAToZ = inventors.sort()

console.log(sortAToZ)

//Milestone 3 🛣🏃Map
  //Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).

  let printPowersOfTwo = numbers.map(num => Math.pow(2,num))
  console.log(printPowersOfTwo)

//   Print out an array of every number multiplied by 100.

  let printNumMulti100 = numbers.map(num=>num*100)
  console.log(printNumMulti100)

  //Print out initials of all inventors(e.g. A.E., I.N., ...)

 let printFirstCharOfEachWord = inventors.map(name => name.split(' ').map((word,idx)=>word.split('')[0]))
    //  [0][0]+"."+name.split(' ')[1][0]
         
    
// let printFirstCharOfEachWord = inventors.map(name=>
//     {

//     })
  console.log(printFirstCharOfEachWord)

  //Print out all the inventors' names in uppercase.

  let printUperCase = inventors.map(name => name.toUpperCase())
  console.log(printUperCase)

  //Print out the length of every inventor's full name.

  let printLengthOfEachName = inventors.map(name => name + " has " + name.length + " index")
  console.log(printLengthOfEachName)

//Print out the first name of each inventor.

let printFirstName = inventors.map(name =>
        name.split(' ')[0] 
    )
console.log(printFirstName)


//Milestone 2 🛣🏃Filter
//   Print out an array of the numbers which are prime.

  let printPrime = numbers.filter(num =>{
         for(let i = 2;i<num;i++)
             if(num % i ==0)
             {
                return false
             }
                 return num>1 
        }
    )
console.log(printPrime)
//Print out an array of the numbers that have two digits.

let printWith2digits = numbers.filter(num =>
    num > 9 || num < -9
)

console.log(printWith2digits)




  //Print out an array of the numbers which are odd.

let oddNumber = numbers.filter(name=>
    name%2==1    
)
console.log(oddNumber)

  let printFirstNameA = inventors.filter((name)=>
     name.split('')[0] === 'A'
 )

  console.log(printFirstNameA)
//   console.log(printNamen)

// Print out an array of the inventors whose name contains 'n'.
let printNamen = inventors.filter(name=>
    name.includes('n')
  )
  
  console.log(printNamen)

//print Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
  let printNamea = inventors.filter(name =>{
    const chars = name.split('')
    let isRepeated = false
    chars.filter((char , i)=>{
      const thisCharAndNextCharIsTheSame = char ===chars[i+1]
      console.log(thisCharAndNextCharIsTheSame)
      if(thisCharAndNextCharIsTheSame) isRepeated = true
    })
    return isRepeated
  })

  
  
  console.log(printNamea);