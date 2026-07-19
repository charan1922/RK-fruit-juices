# Image drop-in guide

Folder names mirror the product `id`s in [`data/products.ts`](../../data/products.ts).

```
public/images/
  brand/
    IMG_8151.jpeg        # brand banner (3 bottles + logo text)
    IMG_8152.jpeg        # circular RK logo badge — used as the nav mark
  products/
    abc-juice/            # Cold-Pressed Juice — ABC (Apple/Beetroot/Carrot)
      juice-cup-1.jpeg
    fresh-fruit-cup/
      fruit-cup-1.jpeg
      flyer.jpeg           # promo graphic with baked-in text, kept for reference
    protein-snack-cup/
      veg-cup-1.jpeg
      flyer.jpeg
  marketing/
    combined-flyer-1.jpeg  # full price-list flyer (has placeholder contact)
    combined-flyer-2.jpeg  # full price-list flyer (real contact + pricing)
```

More photos welcome — drop additional shots into the matching `products/<id>/`
folder (add a new folder if it's a new product) and they can be wired into the
site. Prefer well-lit, minimal-background shots for anything meant to sit in
the hero/selector; flyer-style graphics with baked-in text work better as
reference material than as page imagery, since the page sets its own type.
