import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import expensesData from '@/data/expenses.json';

export default function CostosPage() {
  const totalGeneral = expensesData.general.reduce((sum, item) => sum + item.amount, 0);
  const projectTotals = Object.entries(expensesData.projects).map(([projectName, expenses]) => ({
    name: projectName,
    total: expenses.reduce((sum: number, item: any) => sum + item.amount, 0),
    expenses,
  }));
  const grandTotal = totalGeneral + projectTotals.reduce((sum, p) => sum + p.total, 0);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparencia de Costos</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Todos los gastos del proyecto, actualizados manualmente. Radical transparency.
        </p>

        {/* Overview */}
        <Card className="border-zinc-800 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Total Acumulado</CardTitle>
            <CardDescription>Desde el inicio del proyecto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold text-violet-500">
              ${grandTotal.toFixed(2)} USD
            </div>
          </CardContent>
        </Card>

        {/* General Expenses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gastos Generales</h2>
          <div className="space-y-4">
            {expensesData.general.map((expense, index) => (
              <Card key={index} className="border-zinc-800">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{expense.concept}</CardTitle>
                      <CardDescription>
                        {new Date(expense.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-2xl font-bold">
                        ${expense.amount.toFixed(2)} {expense.currency}
                      </div>
                      {expense.recurring && (
                        <Badge variant="secondary">{expense.recurring}</Badge>
                      )}
                    </div>
                  </div>
                  {expense.note && (
                    <p className="text-sm text-muted-foreground mt-2">{expense.note}</p>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-4 text-right">
            <span className="text-lg text-muted-foreground">Subtotal: </span>
            <span className="text-2xl font-bold text-violet-500">
              ${totalGeneral.toFixed(2)} USD
            </span>
          </div>
        </div>

        {/* Per-Project Expenses */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Por Proyecto</h2>
          {projectTotals.map((project) => (
            <div key={project.name} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <div className="space-y-4">
                {project.expenses.map((expense: any, index: number) => (
                  <Card key={index} className="border-zinc-800">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{expense.concept}</CardTitle>
                          <CardDescription>
                            {new Date(expense.date).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </CardDescription>
                        </div>
                        <div className="text-xl font-bold">
                          ${expense.amount.toFixed(2)} {expense.currency}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-4 text-right">
                <span className="text-lg text-muted-foreground">Subtotal {project.name}: </span>
                <span className="text-2xl font-bold text-violet-500">
                  ${project.total.toFixed(2)} USD
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
