import React from 'react';

export default function ErrorMessage({ message }: { message: string }) {
  return <div className="text-center mt-5 text-red-700">{message}</div>;
}
