export async function getname() {
  console.log("We are done in the funcrion js mmm");
  return "Miraj";
}

export async function getinfo() {
  try {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "helloworld",
      }),
    });
    const newData = await response.json();
    console.log("We are done in the funcrion js   === " + newData);
    return newData;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
