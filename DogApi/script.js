async function getActivity() {
  try {
    const response = await fetch("https://apis.scrimba.com/bored/api/activity");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("these", err);
  } finally {
    console.log("executed");
  }
}

getActivity();