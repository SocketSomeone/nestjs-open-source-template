import { ConfigurableModuleBuilder } from '@nestjs/common';
import { LibraryOptions } from './library-options.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
	new ConfigurableModuleBuilder<LibraryOptions>()
		.setClassMethodName('forRoot')
		.setFactoryMethodName('createLibraryOptions')
		.build();
