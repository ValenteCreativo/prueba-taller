'use client'

import { useState } from 'react'

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 sm:px-24 text-[var(--foreground)] space-y-16">
      {/* Intro */}
      <section>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About me</h1>
        <p className="text-lg max-w-2xl text-[var(--muted)]">
          I’m a frontend developer who loves mixing aesthetics and logic. Below are two simple
          tools built with React — a calculator and a to-do list — to show the power of interactive
          UI on the web.
        </p>
      </section>

      {/* Calculator Tool */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Simple Calculator</h2>
        <Calculator />
      </section>

      {/* Todo List Tool */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">To-do List</h2>
        <TodoList />
      </section>
    </main>
  )
}

// 🧮 Calculator Component
function Calculator() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    const sum = parseFloat(a) + parseFloat(b)
    if (!isNaN(sum)) setResult(sum)
  }

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Number A"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="border border-[var(--muted)] rounded-md px-3 py-2 w-32"
        />
        <input
          type="number"
          placeholder="Number B"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="border border-[var(--muted)] rounded-md px-3 py-2 w-32"
        />
        <button
          onClick={calculate}
          className="px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--background)] hover:bg-black transition"
        >
          Add
        </button>
      </div>
      {result !== null && (
        <p className="text-lg">
          Result: <strong>{result}</strong>
        </p>
      )}
    </div>
  )
}

// ✅ Todo List Component
function TodoList() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const addTask = () => {
    if (task.trim()) {
      setTodos((prev) => [...prev, task])
      setTask('')
    }
  }

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="New task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-[var(--muted)] rounded-md px-3 py-2 w-64"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--background)] hover:bg-black transition"
        >
          Add Task
        </button>
      </div>

      <ul className="list-disc pl-5 space-y-2 text-base">
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
