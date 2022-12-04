const { Component } = Shopware;

Component.extend('swag-bundle-create', 'swag-bundle-detail', {
    methods: {
        getBundle() {
            this.bundle = this.repository.create(Shopware.Context.api);
        },

        onClickSave() {
            this.isLoading = true;

            this.repository
                .save(this.bundle, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    console.log(this.bundle.id );
                    this.$router.push({ name: 'swag.bundle.detailtest', params: { id: this.bundle.id } });
                }).catch((exception) => {
                this.isLoading = false;

                this.createNotificationError({
                    title: this.$t('swag-bundle.detail.errorTitle'),
                    message: exception
                });
            });
        }
    }
});