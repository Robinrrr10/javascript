let laptop = {
    name: 'Sony',
    cpu: 'i7',
    memory: '8GB',
    modelYear: 2015,

    getConfig: function() {
        console.log(this.cpu)
    },

    compare: function(anotherLaptop){
        if(this.cpu > anotherLaptop.cpu)
        console.log(this)
    else
        console.log(anotherLaptop)
    }
}

let otherLaptop = {
    name: 'HP',
    cpu: 'i5',
    memory: '8GB',
    modelYear: 2019,

    getConfig: function() {
        console.log(this.cpu)
    }
}

function getHighCpuLaptop(laptop1, laptop2){
    if(laptop1.cpu > laptop2.cpu)
        console.log(laptop1)
    else
        console.log(laptop2)
}

laptop.getConfig()
otherLaptop.getConfig()

getHighCpuLaptop(laptop, otherLaptop)
laptop.compare(otherLaptop)
