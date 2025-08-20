// Routes and navigation constants
export const ROUTES = {
  HOME: '/',
  QUESTIONS: '/questions',
  TAGS: '/tags',
  ABOUT: '/about',
  CONTACT: '/contact'
};

// Blog metadata and configuration
export const SITE_CONFIG = {
  name: 'TechBit',
  description: 'A community-driven blog answering unanswered questions in tech',
  url: 'https://techbit.dev',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/techbit',
    github: 'https://github.com/techbit',
    linkedin: 'https://linkedin.com/company/techbit'
  }
};

// Available tags for blog posts
export const TAGS = {
  JAVASCRIPT: { id: 'javascript', name: 'JavaScript', color: '#f7df1e' },
  REACT: { id: 'react', name: 'React', color: '#61dafb' },
  NEXTJS: { id: 'nextjs', name: 'Next.js', color: '#000000' },
  NODEJS: { id: 'nodejs', name: 'Node.js', color: '#339933' },
  TYPESCRIPT: { id: 'typescript', name: 'TypeScript', color: '#3178c6' },
  CSS: { id: 'css', name: 'CSS', color: '#1572b6' },
  HTML: { id: 'html', name: 'HTML', color: '#e34f26' },
  PYTHON: { id: 'python', name: 'Python', color: '#3776ab' },
  DATABASE: { id: 'database', name: 'Database', color: '#336791' },
  DEVOPS: { id: 'devops', name: 'DevOps', color: '#ff6b35' },
  API: { id: 'api', name: 'API', color: '#00d4aa' },
  PERFORMANCE: { id: 'performance', name: 'Performance', color: '#ff4444' }
};

// Sample blog data (in a real app, this would come from a CMS or database)
export const SAMPLE_QUESTIONS = [
  {
    id: 1,
    slug: 'why-react-hooks-not-working-class-components',
    title: 'Why don\'t React Hooks work in class components?',
    excerpt: 'Understanding the fundamental differences between function and class components, and why hooks are exclusive to functional components.',
    content: `# Why don't React Hooks work in class components?

React Hooks are a fundamental feature introduced in React 16.8, but they come with a specific limitation: they only work in functional components. This isn't just a design choice—it's rooted in how React's internal mechanisms work.

## The Technical Reason

Hooks rely on React's internal fiber architecture and the component's position in the component tree. When React renders a functional component, it maintains a linked list of hooks that corresponds to the order in which hooks are called. This mechanism allows React to:

1. **Preserve state between renders**
2. **Track dependencies for effects**
3. **Maintain the component lifecycle**

Class components use a completely different mechanism. They have their own lifecycle methods (\`componentDidMount\`, \`componentDidUpdate\`, etc.) and maintain state through \`this.state\`.

## Code Examples

**❌ This won't work:**

\`\`\`jsx
class MyComponent extends React.Component {
  render() {
    const [count, setCount] = useState(0); // Error!
    return <div>{count}</div>;
  }
}
\`\`\`

**✅ This works:**

\`\`\`jsx
function MyComponent() {
  const [count, setCount] = useState(0); // Perfect!
  return <div>{count}</div>;
}
\`\`\`

## Migration Strategy

If you have class components and want to use hooks:

1. **Convert to functional components**
2. **Use the equivalent hooks** for lifecycle methods
3. **Migrate state management** from \`this.state\` to \`useState\`

The React team designed hooks this way to encourage the use of functional components, which are simpler to understand, test, and optimize.`,
    author: {
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      role: 'Senior React Developer'
    },
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    tags: ['react', 'javascript'],
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    slug: 'difference-between-undefined-null-javascript',
    title: 'What\'s the difference between undefined and null in JavaScript?',
    excerpt: 'A deep dive into JavaScript\'s two "empty" values and when to use each one in your code.',
    content: `# What's the difference between undefined and null in JavaScript?

JavaScript has two primitive values that represent "nothing" or "empty" values: \`undefined\` and \`null\`. While they might seem similar, they serve different purposes and have distinct behaviors.

## Undefined

\`undefined\` represents a variable that has been declared but hasn't been assigned a value, or a property that doesn't exist.

### When you'll encounter undefined:

\`\`\`javascript
let x;
console.log(x); // undefined

const obj = { name: 'John' };
console.log(obj.age); // undefined

function greet(name) {
  console.log(name); // undefined if called without arguments
}
greet();

function noReturn() {
  // implicitly returns undefined
}
console.log(noReturn()); // undefined
\`\`\`

## Null

\`null\` is an intentional absence of value. It's explicitly assigned to represent "no value" or "empty."

### When to use null:

\`\`\`javascript
let user = null; // Intentionally no user
let data = null; // Will be populated later

// API responses often use null
const response = {
  user: null, // No user logged in
  error: null  // No error occurred
};
\`\`\`

## Key Differences

| Aspect | undefined | null |
|--------|-----------|------|
| **Type** | \`"undefined"\` | \`"object"\` (quirk) |
| **Assignment** | Automatic by JS | Manual by developer |
| **Meaning** | "Not defined" | "Intentionally empty" |
| **JSON** | Not serialized | Serialized as \`null\` |

## Type Checking

\`\`\`javascript
// typeof operator
typeof undefined; // "undefined"
typeof null;      // "object" (this is a known bug!)

// Better null checking
value === null;           // true only for null
value === undefined;      // true only for undefined
value == null;            // true for both null AND undefined
value == undefined;       // true for both null AND undefined

// Modern approach
value ?? 'default';       // nullish coalescing
\`\`\`

## Best Practices

1. **Let JavaScript handle undefined** - don't manually assign it
2. **Use null for intentional emptiness**
3. **Use strict equality** (\`===\`) for precise checking
4. **Consider nullish coalescing** (\`??\`) for default values

Understanding these differences helps you write more predictable and maintainable JavaScript code.`,
    author: {
      name: 'Mike Rodriguez',
      avatar: '/avatars/mike.jpg',
      role: 'JavaScript Architect'
    },
    publishedAt: '2024-01-12',
    readTime: '4 min read',
    tags: ['javascript'],
    views: 890,
    likes: 67
  },
  {
    id: 3,
    slug: 'async-await-vs-promises-javascript',
    title: 'Should I use async/await or Promises in JavaScript?',
    excerpt: 'Comparing async/await and Promises to help you choose the best approach for asynchronous JavaScript code.',
    content: `# Should I use async/await or Promises in JavaScript?

Both async/await and Promises handle asynchronous operations in JavaScript, but they offer different syntax and use cases. The choice depends on your specific situation and coding style preferences.

## Promises: The Foundation

Promises are the foundation of asynchronous JavaScript. They represent a value that may be available now, later, or never.

\`\`\`javascript
// Traditional Promise approach
function fetchUserData(userId) {
  return fetch(\`/api/users/\${userId}\`)
    .then(response => response.json())
    .then(user => {
      console.log('User:', user);
      return user;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}
\`\`\`

## Async/Await: Syntactic Sugar

Async/await is syntactic sugar built on top of Promises, making asynchronous code look more like synchronous code.

\`\`\`javascript
// Async/await approach
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const user = await response.json();
    console.log('User:', user);
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
\`\`\`

## When to Use Promises

### 1. Functional Programming Style
\`\`\`javascript
const processUser = (userId) =>
  fetchUser(userId)
    .then(validateUser)
    .then(enrichUserData)
    .then(saveUser);
\`\`\`

### 2. Parallel Operations
\`\`\`javascript
Promise.all([
  fetchUser(1),
  fetchUser(2),
  fetchUser(3)
]).then(users => {
  console.log('All users loaded:', users);
});
\`\`\`

### 3. Complex Chain Transformations
\`\`\`javascript
api.getItems()
  .then(items => items.filter(item => item.active))
  .then(activeItems => activeItems.map(item => item.id))
  .then(ids => Promise.all(ids.map(fetchDetails)))
  .then(details => details.sort((a, b) => a.priority - b.priority));
\`\`\`

## When to Use Async/Await

### 1. Sequential Operations
\`\`\`javascript
async function processOrder(orderId) {
  const order = await fetchOrder(orderId);
  const customer = await fetchCustomer(order.customerId);
  const inventory = await checkInventory(order.items);
  
  return {
    order,
    customer,
    inventory
  };
}
\`\`\`

### 2. Complex Error Handling
\`\`\`javascript
async function robustApiCall() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    return processed;
  } catch (error) {
    if (error.status === 404) {
      return getDefaultData();
    }
    if (error.status === 500) {
      await logError(error);
      throw new Error('Server error occurred');
    }
    throw error;
  }
}
\`\`\`

### 3. Loops with Async Operations
\`\`\`javascript
async function processItems(items) {
  const results = [];
  
  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
    
    // Maybe add delay between items
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  return results;
}
\`\`\`

## Combining Both Approaches

You can mix async/await with Promise methods:

\`\`\`javascript
async function fetchUserWithPosts(userId) {
  try {
    // Parallel operations using Promise.all with await
    const [user, posts] = await Promise.all([
      fetchUser(userId),
      fetchUserPosts(userId)
    ]);
    
    return { ...user, posts };
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}
\`\`\`

## Performance Considerations

- **Async/await**: Slightly more overhead due to generator functions
- **Promises**: More direct, but can lead to "callback hell" with complex chains
- **Both**: Have identical performance for most practical applications

## Recommendation

- **Use async/await** for most scenarios—it's more readable and easier to debug
- **Use Promises** when you need functional programming patterns or complex chaining
- **Combine both** when you need parallel operations (Promise.all) within async functions

The key is consistency within your codebase and choosing the approach that makes your code most readable and maintainable.`,
    author: {
      name: 'Alex Kim',
      avatar: '/avatars/alex.jpg',
      role: 'Full Stack Developer'
    },
    publishedAt: '2024-01-10',
    readTime: '7 min read',
    tags: ['javascript', 'api'],
    views: 1567,
    likes: 123
  }
];

// Pagination settings
export const PAGINATION = {
  POSTS_PER_PAGE: 6,
  POSTS_PER_PAGE_MOBILE: 3
};

// Theme configuration
export const THEME = {
  DEFAULT: 'system',
  LIGHT: 'light',
  DARK: 'dark'
};
