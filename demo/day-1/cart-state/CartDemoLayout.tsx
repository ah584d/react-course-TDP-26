import { useId, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import './CartStateDemo.css'

type CartDemoLayoutProps = {
  children: ReactNode
  className?: string
  sources: { path: string; source: string; label?: string }[]
}

export default function CartDemoLayout(props: CartDemoLayoutProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const tabsId = useId()
  const hasTabs = props.sources.length > 1

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % props.sources.length
        break
      case 'ArrowLeft':
        nextIndex = (index - 1 + props.sources.length) % props.sources.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = props.sources.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    setSelectedIndex(nextIndex)
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus()
  }

  return (
    <div className={`cart-state-demo ${props.className ?? ''}`}>
      <section className="cart-state-preview" aria-label="Store preview">
        {props.children}
      </section>
      <aside className="cart-state-source" aria-label="Cart code">
        <p>Edit in VS Code and save to update the preview and source together.</p>
        {hasTabs && (
          <div className="cart-state-tabs" role="tablist" aria-label="Source files">
            {props.sources.map((source, index) => (
              <button
                key={source.path}
                type="button"
                role="tab"
                id={`${tabsId}-tab-${index}`}
                aria-controls={`${tabsId}-panel-${index}`}
                aria-selected={selectedIndex === index}
                tabIndex={selectedIndex === index ? 0 : -1}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={event => handleTabKeyDown(event, index)}
              >
                {source.label ?? source.path}
              </button>
            ))}
          </div>
        )}
        {props.sources.map((source, index) => (
          <section
            key={source.path}
            role={hasTabs ? 'tabpanel' : undefined}
            id={`${tabsId}-panel-${index}`}
            aria-labelledby={hasTabs ? `${tabsId}-tab-${index}` : undefined}
            hidden={selectedIndex !== index}
          >
            <h2><code>{source.path}</code></h2>
            <pre tabIndex={0} aria-label={`${source.path} source`}>
              <code>{source.source}</code>
            </pre>
          </section>
        ))}
      </aside>
    </div>
  )
}
