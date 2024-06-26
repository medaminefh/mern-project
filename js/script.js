      // Arrays*
      let users = [
        {
          name: "Abou nasser",
          age: 43,
          job: "Computer science",
          hobbies: ["Travel", "Swimming", "Football"],
        },
        {
          name: "Haroun",
          age: 26,
          job: "Computer science",
          hobbies: ["Swimming", "Football"],
        },
        {
          name: "Mohamed amine",
          age: 27,
          job: "Software developer",
          hobbies: ["Playing chess", "Travel", "Watching movies"],
        },
      ];


      // for(let i = 0; i < users.length; i++) {
      //   console.log("Name:", users[i].name)
      //   console.log("Age:", users[i].age)
      //   console.log("Job:", users[i].job)
      // }

/*       let i = 0;
      while(i < users.length) {
        console.log("Name:", users[i].name)
        console.log("Age:", users[i].age)
        console.log("Job:", users[i].job)
        i++
      } */

      // Anonymous function in JS
      /* let hello = function () {
        console.log("Hello world")
      }

      hello() */

      // Arrow function in JS ES6 / ES2015
/*       let hello = () => {
        console.log("Hello world!")
      }

      hello() */

      // String methods
      let description = '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz'

      let result = description.includes('yghiyuik')
      //console.log(result)

      // 53.6544547 => 53.65$ => 3.75 = 201.19

      // Number methods


      // Array methods
      
      let otherNames = [
        "Majdi",
        "Amira",
        "Abd elghani"
        ]
        
      const arr1 = ["Cecilie", "Lone"];
      const arr2 = ["Emil", "Tobias", "Linus"];
      const arr3 = ["Robin", "Morgan"];

      // let exemToString = names.concat(otherNames, arr1, arr2, arr3)
      //let exemToString = [...names, ...otherNames, ...arr1, ...arr2, ...arr3]

      let names = [

        "Mohamed amine",
        "Abou nasser",
        "Haroun",

        "Amira",
      ]

      let copyOfNames = [...names]

      let slicedNames = copyOfNames.splice(2, 2, "Omar", "Amine")

      console.log(names, copyOfNames, slicedNames)


      // map method

/*     let newArr = names.map(function(name) {
        console.log(name.length)
        return name.length
      })

      console.log(newArr) // [13, 11, 6]

      // reduce method
      let sum = newArr.reduce(function(total, value) {
        return total + value
      }) */

/*         let scores = [
          50,90,80,75,30,55,36,75,84,46
        ]


      // filter method (<50)
      let res = scores.filter(function(score) {
        return score <= 50
      })

      console.log(res) */

      // Object methods


      // Rest operator VS Spread operator (...)
      
      