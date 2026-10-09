'use client';

import React from 'react';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div
      className="toast show"
      style={{
        borderLeftColor: toast.type === 'warning' ? '#F9A825' : '#43A047',
      }}
    >
      {toast.message}
    </div>
  );
}
