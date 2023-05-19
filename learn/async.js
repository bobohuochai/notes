async function async1() {
    console.log('1')
    await async2()
    console.log('2')
  }
  async function async2() {
    console.log('12')
    await async3()
    console.log('3')
  }
  async function async3() {
    console.log('13')
  }
  console.log('4')
  setTimeout(function() {
    console.log('5')
    new Promise(function(resolve) {
      console.log('6')
      resolve()
    }).then(function() {
      console.log('7')
    })
  })
  
  setTimeout(function() {
    console.log('8')
  }, 0)
  async1()
  new Promise(function(resolve) {
    console.log('9')
    resolve()
  }).then(function() {
    console.log('10')
  })
  console.log('11')
