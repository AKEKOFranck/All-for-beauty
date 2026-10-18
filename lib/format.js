export const formatPrice = (n, currency = "FCFA") =>
  n ? `${new Intl.NumberFormat("fr-FR").format(n)} ${currency}` : "Sur demande";