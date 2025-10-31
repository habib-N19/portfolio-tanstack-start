import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  ClipboardType,
  Database,
  Globe,
  Home,
  Menu,
  Network,
  SquareFunction,
  StickyNote,
  Table,
  X,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  return (
    <>
  TOP NAV
    </>
  )
}
