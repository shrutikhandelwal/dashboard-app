1) db wasn't adding user data was getting below error:

--node_modules\ts-node\dist-raw\node-internal-modules-esm-resolve.js:757
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base));
        ^
CustomError: Cannot find package '@/stuff' imported from C:\Users\me\Desktop\test\src\index.ts
    at packageResolve (C:\Users\me\Desktop\test\node_modules\ts-node\dist-raw\node-internal-modules-esm-resolve.js:757:9)
    at moduleResolve (C:\Users\me\Desktop\test\node_modules\ts-nod
    
    
  Ans: 
  1)had to correct file extension to .js
  2)general.js already had User imported which was coming in index.js so didn't need to use {} to get it.
  
  