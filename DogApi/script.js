async function getActivity() {
  try {
    const response = await fetch(
      "https://apis.scrimba.com/jsonplaceholder/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Holiday Nightmares",
          body: "When I was kidnapped in scotland",
          userId: 2,
        }),
      },
    );
    if (!response.ok) {
      throw new Error("There was a problem with the API");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("these", err);
  } finally {
    console.log("executed");
  }
}

getActivity();

// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   if (success) {
//     resolve("Operation Successfful!");
//   } else {
//     reject("Operation Rejected");
//   }
// });

// promise.then((response) => {
//   console.log(response);
// });

// async function Check(promise) {
//   try {
//   const response = await promise;
//   console.log(response);
// } catch (err) {
//   console.log(err);
// }
// }

// Check(promise)

function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () =>
      reject(`Image failed to load: ${url}`)
    );
  });
}

async function Check() {
  try {
    const result = await preLoadImg(
      "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg"
    );
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

Check();