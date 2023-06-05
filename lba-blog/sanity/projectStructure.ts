const projectStructure = (S) => {
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Filtered Projects")
        .child(
          S.list()
            .title("Filters")
            .items([
              S.listItem()
                .title("Projects By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Projects by Category")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Projects")
                        .filter(
                          `_type == "project" && $categoryId in categories[]._ref`
                        )
                        .params({ categoryId })
                    )
                ),
              S.listItem()
                .title("Projects By Author")
                .child(
                  S.documentTypeList("author")
                    .title("Projects by Author")
                    .child((authorId) =>
                      S.documentList()
                        .title("Projects")
                        .filter(
                          `_type == "project" && $authorId == author._ref`
                        )
                        .params({ authorId })
                    )
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems(),
    ]);
};

export default projectStructure;
