// FIX for Jest error - ReferenceError: TextEncoder is not defined
// Needs to be added to jest setup file which runs in lib
import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });

// Mocks
const mock = () => {
  let storage = {};
  return {
    // @ts-ignore
    getItem: key => (key in storage ? storage[key] : null),
    // @ts-ignore
    setItem: (key, value) => (storage[key] = value || ''),
    // @ts-ignore
    removeItem: key => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });

Object.defineProperty(window, 'BeforeUnloadEvent', {
  value: class BeforeUnloadEvent {},
});

Object.defineProperty(Event, 'stopPropagation', {
  value: () => {},
});
