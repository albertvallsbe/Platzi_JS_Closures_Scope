const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    };
    return displayCount; 
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount(); 

// const myCount = buildCount(0);
myCount();
myCount();
myCount();
myOtherCount(); 

console.log(myOtherCount().value);
console.log(myCount().value);