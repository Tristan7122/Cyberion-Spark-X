// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA5VV25KqRhT9l37VOspFEaumKoDcBhUEUZlUHqBpsFUuNg0jnvIL8hF5y/flE1LoTM5UcnIy4alpdq291t5rb76CvMAVslALpl9BSXATUtQdaVsiMAVynSSIgD6IQxqCKegZcmt4QaqVvU0l6X6psr68FV62O8qaVUGTI+M0Umg0+eIJ3PqgrKMThj8A5NVTpg3clF1fZt5IqyIrirStVkzcHr0ur/PxoorEQol07fgEbh1iiAnOU7XcowyR8GSh1gkx+Rx91Vxql8Wa82tFWK6FduToDl/k5bIVmUMNjwM2WOfbdaD68HP0maMFX6VB6c8FyHP2FW/U8gRRzNq2Z0pnC57rlXKWoOD5D/oVTnMUmzHKKabtp+uu2hM2NZhDZOS7nVclUNoEcIOKo5EMtdKcMy670ZurnOT854i7+fk80wSU7mLHdx1b51I28XakZnEK2ziC57iWd/M0SYOPxB3y7pXj/6m7pzfWeJ4OkovFvizTxvOGM5Iin0aXOSfGqWD2Io/NOUsffo7+tSHP9oFckmjjWPKJtC+xaC8YKx1hZXHiLQhnDC2H18gvvtEPaU1+xFLfX4fCSoPeoeUdod4t9s7KZOZaIVVjxz/W6nygcJPDsSlzw14vqnOwCkbPGR8x+SyDEiNDxd7bl/KCy/bazpaUSS+H16e7oiNqzRhMmVsfEJTiipKQ4iK/3wl9EMaNhyBB9F5dwDUrpbH01W7nF/v1Eso6owfWZtLMhZ2Mt5Iz712LOR4fs+MT6IOSFBBVFYoNXNGCtAtUVWGKKjD9+d6oTjNBWUHRM47BFLDCeCJyPC8K7E/Vl9d9SKuwLL/kiII+SEiRLRCYUlKjPrjHc5IijLmJIo+F8Vjl2NlYZDpR2SPPGmeoomFWdlpG7GgisuLk9ksf5OhCH47pdHJMHySYVNTP6/JUhPG7nd4/hhAWdU69NodKd0AETD9cI0pxnladmDoPCdzjBikddzBNwlOF/iotIih+5/+2LpQi7jquC856yy9l0HHvgP5ejqkg/LMip0cULzBDgZ2MRHE0Gk+6yO5DH+RhhwUcw3alP377/deuMm+cuxQxoiE+VWAKlOdWmQj8UrUTg4ULXZcWqaSkEvim8d2lDxugYh5tVP8YK8peVKUznLnB5nxUiWka0ckKxorg9sIeI8uLp++AdAhzQYycjR6YzCC7bF7Qcp1acLseDa2YC33lQtNUeD0M3KxHzwoXXNj989Zf0WtujorzaxQVDlwdqGLYuIjUXTIei7YsPXXZYtRgiD4mM8LSnflBHPBV5CSNCZe9oclP/B5eHKroPIxJzvK1uJI5ZmFQS3UT7eImItI1Ep4bKEx69rqkzih/4RALNTeG4uCQPubnPr+nt72J36yN768JRvc19NaH/+rmg3fnueGt/wHiba/9y26Qd2eFZVzt2VilReJKVi4Nt1pYylaryOzIy+y0HiZZQ1erNbh15i9PIU0KkoEpwOW+yBHoA1LUnYfNPCl+kEuRfHO2eug+hRWVvs3F90aNf0Q5pCiNsNp3fyWL3xt8Z/JWKkuPhvR9zIB0f3wb3P4E7F+GIfsHAAA=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'false' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'false' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Tuesday",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "27634624586",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;
