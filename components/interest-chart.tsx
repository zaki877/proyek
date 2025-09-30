"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { category: "Sains", score: 85 },
  { category: "Teknologi", score: 92 },
  { category: "Seni", score: 65 },
  { category: "Sosial", score: 78 },
  { category: "Bisnis", score: 70 },
  { category: "Kesehatan", score: 60 },
]

export function InterestChart() {
  return (
    <Card className="p-6 bg-card">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Analisis Minat</h3>
          <p className="text-sm text-muted-foreground">Distribusi skor minat berdasarkan kategori</p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--popover-foreground))",
                }}
              />
              <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}
