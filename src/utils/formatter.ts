import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDateDistance(createdAt: string): string {
  const dateDistance = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })
  return dateDistance.charAt(0).toUpperCase() + dateDistance.slice(1)
}
