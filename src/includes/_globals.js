import _ from "lodash";

export default {
  install(app) {
    const baseComponents = import.meta.glob("../components/base/*.vue", {
      eager: true,
    }); //search file with pattern

    // convert object to array
    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = _.upperFirst(
        _.camelCase(
          path
            .split("/")
            .pop()
            .replace(/\.\w+$/, "")
        )
      );

      //   console.log(path, componentName);
      //   export default
      app.component(`Base${componentName}`, module.default);
    });
  },
};
