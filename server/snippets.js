const jsSnippets = [
    `const calculateTotal = (cart) => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };`,
  
    `async function fetchUserData(userId) {
    try {
      const response = await fetch(\`/api/users/\${userId}\`);
      if (!response.ok) throw new Error('User not found');
      return await response.json();
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  }`,
  
    `class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  }`,
  
    `const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };`,
  
    `app.get('/api/health', (req, res) => {
    const systemStatus = {
      uptime: process.uptime(),
      message: 'Server is running smoothly',
      timestamp: Date.now()
    };
    res.status(200).json(systemStatus);
  });`,
  
    `const flattenArray = (arr) => {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
    , []);
  };`
  ];
  
  module.exports = jsSnippets;