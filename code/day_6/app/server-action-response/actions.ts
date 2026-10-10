"use server";

export async function getServerTime(): Promise<{
  message: string;
  timestamp: string;
  randomNumber: number;
}> {
  // Simulate a slow server operation
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    message: "Hello from the server!",
    timestamp: new Date().toISOString(),
    randomNumber: Math.floor(Math.random() * 1000),
  };
}
