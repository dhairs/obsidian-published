import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src="/static/icon.svg" width={40} />
        {"  "}
        {title}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}

.page-title img {
   vertical-align: middle; /* Or try 'top' or 'bottom' */
   filter: invert(0%);
}

html[saved-theme="light"] .page-title img {
  filter: invert(100%);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
