---
layout: ../layouts/blog.astro
title: Astro Syntax Highlighting for Sublime Text and Micro Editor
description: Small snippet for creating them
date: 2021-09-17
---

## Create Syntax Highlighting for Micro

Edit `~/.config/micro/settings.json`:

```json
{
	"*.astro": {
		"filetype": "html"
	}
}
```

## Create Syntax Highlighting for Sublime

First, install `Svelte` package in Sublime.

Next, create `Astro.sublime-syntax` in `~/.config/sublime-text-3/User/`:

```yaml
%YAML 1.2
---

# https://www.sublimetext.com/docs/syntax.html#ver-3.2
# https://github.com/rajasegar/vim-astro/blob/main/syntax/astro.vim

name: Astro
file_extensions: [astro]
scope: source.astro

contexts:
  main:
    - match: "---"
      push: Packages/JavaScript/JavaScript.sublime-syntax
      with_prototype:
        - match: "---"
          push: html

    - match: ""
      push: html

  html:
    - match: ""
      push: Packages/Svelte/Svelte.sublime-syntax
```

Or, you can using intruction in [mzaini30/astro-sublime](https://github.com/mzaini30/astro-sublime).
