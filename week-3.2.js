// //function to find the given string is anagram or not
function isAnagram (str1,str2) {

    const firstStr = str1.split('').sort().join('');
    const secondStr = str2.split('').sort().join('');

    if(firstStr === secondStr) {
        return true;
    }
    else {
        return false;
    }
}
const tr = isAnagram("hello", "lehlo");
console.log(tr);


// //function to find largest element in the array
function findLargestElement(numbers) {
    let largestElement = numbers[0];
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i] > largestElement) {
            largestElement = numbers[i];
        }
    }
    return largestElement;
}

const ans = findLargestElement([12,34,32,21,1,9]);
console.log(ans);



// //function to count the vowels in the given string
function countVowels (str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0;i<str.length;i++) {
       if(vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

const countingVowels = countVowels("aeiouuei");
console.log(countingVowels);


// //function to find the given string is palindrome or not 
function isPalindrome(str) {
    const lowercase = str.toLowerCase();
    const filteredString = lowercase.split('').filter((char) => (char !=='?' && char !==',' && char !=='.')).join('');
    const reversedString = filteredString.split('').reverse().join('');
    if(filteredString === reversedString) {
        return true;
    }
    else {
        return false;
    }
}

// const fun = isPalindrome("bo,b");
// console.log(fun);


// //function to calculate the time gap between an expensive operation
function calculateTime(n) {
    const startTime = Date.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const endTime = Date.now();
    console.log(endTime - startTime);
}

calculateTime(1000000);


class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }
    remove(indexOfTodo) {
        this.todos.splice(indexOfTodo,1);
    }
    update(index,updateTodo) {
        if(index<0 || index>=this.todos.length) {
            return;
        }
        this.todos[index] = updateTodo;
    }

    getAll() {
        return this.todos;
    }
    get(indexOfTodo) {
        if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
            return null;
        }
        return this.todos[indexOfTodo];
    }
    clear() {
        this.todos = [];
    }
}

const myTodoList = new Todo();

myTodoList.add("learning tech stack");
myTodoList.add("go to gym");
myTodoList.add("doing assignments");
myTodoList.add("sunday class");
myTodoList.remove("1");
myTodoList.update("2","having things");
// myTodoList.clear();
console.log(myTodoList.getAll());
console.log(myTodoList.get("1"));
